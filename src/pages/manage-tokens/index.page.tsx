import React from 'react';
import { Container } from './index.styles';
import { useRouter } from 'next/router';
import TopNav from '@/components/common/top-nav';
import BackIcon from '@assets/back.svg';

const ManageTokens = () => {
  const router = useRouter();

  React.useEffect(() => {
    fetch(`/api/tokens?searchStr=b`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res', res);
      });
    fetch(`/api/tokens?searchStr=btc`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res', res);
      });
  }, []);
  return (
    <Container>
      <TopNav
        centerComponent={<p>مدیریت لیست کوین ها</p>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
      />
    </Container>
  );
};

export default ManageTokens;
