import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Form, Input, Button } from 'antd'

export default function LoginPage() {
  let navigate = useNavigate()

  const onFinish = (values: any) => {
    navigate('/SearchInput')

    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.post(url, {
      login: values.login,
      password: values.password,
    })

    localStorage.setItem('values', JSON.stringify(values))
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="App">
      <div className="LoginPage-header">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Login"
            rules={[{ required: true, message: 'Please input your login!',min:2 }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            rules={[{ required: true, message: 'Please input your password!',min:2 }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
