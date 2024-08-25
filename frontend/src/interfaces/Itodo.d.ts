interface ITodo {
  name: string;
  description: string;
  status: boolean;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

interface TodoProps {
  todo: ITodo;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
