// src/components/UserCard.js

import styled from 'styled-components';

const Card = styled.div`
  padding: 15px;
  border: 1px solid #eee;
  margin: 15px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserInfo = styled.div``;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.first_name} />
      <UserInfo>
        <strong>{user.first_name} {user.last_name}</strong>
        <div>{user.email}</div>
      </UserInfo>
    </Card>
  );
};

export default UserCard;
