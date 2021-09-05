import React, { useRef, useState } from 'react';

interface props {
  title: string | number;
  body: string | number | JSX.Element;
}

const AyoojonAccordion = ({ title, body }: props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(false);
  return (
    <div onClick={() => setSelected((v) => !v)} className="cursor-pointer group border-2 rounded-lg shadow mb-4">
      {/* <h3 className="font-semibold text-lg py-5">{title}</h3> */}
      <details>
        <summary className="font-semibold text-lg py-4 px-4">{title}</summary>
      </details>
      <div
        ref={ref}
        className="relative overflow-hidden transition-all duration-500"
        style={{ maxHeight: selected && ref.current ? ref.current.scrollHeight : 0 }}
      >
        <div className="ml-8 mb-4">{body}</div>
      </div>
    </div>
  );
};
export default AyoojonAccordion;
