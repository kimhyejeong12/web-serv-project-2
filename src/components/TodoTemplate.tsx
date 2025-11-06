type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return (
    <div className = "w-full max-w-lg mx-auto my-8 bg-white rounded-lg shadow-lg p-8">{children}</div>
  );
};

export default TodoTemplate;
