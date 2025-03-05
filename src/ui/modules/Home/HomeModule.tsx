import './styles.module.css';

import { makeGetUsers } from '@/main/use-cases';

export const HomeModule = async () => {
  const getUsers = makeGetUsers();
  const users = await getUsers.execute();

  return (
    <div>
      <h1 className="heading">Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
