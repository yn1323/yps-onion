type Props = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'description';
};

export const Typography = ({ children, type }: Props) => {
  return (
    <div className="py-1">
      {type === 'h1' && <h1>{children}</h1>}
      {type === 'h2' && (
        <h2 className="text-xl underline underline-offset-4">{children}</h2>
      )}
      {type === 'h3' && <h3>{children}</h3>}
      {type === 'h4' && <h4>{children}</h4>}
      {type === 'h5' && <h5>{children}</h5>}
      {type === 'h6' && <h6>{children}</h6>}
      {type === 'description' && <p className="text-gray-600">{children}</p>}
    </div>
  );
};
