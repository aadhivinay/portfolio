import { useEffect, useState, useRef } from 'react';

type CursorState = 'default' | 'button' | 'link' | 'view' | 'explore';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [state, setState] = useState<CursorState>('default');
  const [label, setLabel] = useState('');
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
    if (!isDesktop) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorAttr) {
        const cursorType = cursorAttr.dataset.cursor as CursorState;
        setState(cursorType);
        setLabel(cursorAttr.dataset.cursorLabel || '');
        return;
      }
      if (target.closest('button, a, [role="button"]')) {
        setState('button');
        setLabel('');
        return;
      }
      setState('default');
      setLabel('');
    };

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18;
      setPos({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  const sizeMap: Record<CursorState, number> = {
    default: 8,
    button: 40,
    link: 32,
    view: 64,
    explore: 56,
  };

  const size = sizeMap[state];
  const showLabel = state === 'view' || state === 'explore';

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden lg:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="rounded-full flex items-center justify-center transition-all duration-200 ease-out"
        style={{
          width: size,
          height: size,
          backgroundColor: state === 'default' ? 'rgb(37 99 235)' : 'rgb(37 99 235 / 0.1)',
          border: state === 'default' ? 'none' : '1.5px solid rgb(37 99 235)',
        }}
      >
        {showLabel && (
          <span className="text-[9px] font-bold tracking-wider uppercase text-enterprise-700">
            {label || (state === 'view' ? 'VIEW' : 'EXPLORE')}
          </span>
        )}
      </div>
    </div>
  );
}
