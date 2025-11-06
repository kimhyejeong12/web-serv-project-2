import {useState, type FormEvent, type ChangeEvent } from 'react';

type TodoInsertProps = {
  onAdd: (text: string) => void;
};

const TodoInsert = ({ onAdd }: TodoInsertProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInsert;
