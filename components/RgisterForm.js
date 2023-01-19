import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {NextAuthClient} from 'next-auth/client'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const client = new NextAuthClient();
      await client.signup({ email, password, name, username, number });
      window.location.href = '/';
    } catch (error) {
      setError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...layout}>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      <Form.Item label="Full Name" name="name">
        <Input placeholder="Enter your Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item label="Username" name="username">
        <Input placeholder="Enter a Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label="Number" name="number">
        <Input placeholder="Enter your Number" value={number} onChange={(e) => setNumber(e.target.value)} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={handleSubmit} disabled={isSubmitting}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;