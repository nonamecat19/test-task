import {FC} from 'react';
import {Button, Form, Input, notification} from 'antd';
import {BACKGROUND_IMAGE} from '../constants/images.ts';
import COLORS from '../constants/colors.ts';
import {RoundedBlock, ScreenWithCenterBlock} from "../ui/shared.ts";
import {FormValues} from "../types/form.ts";

const RegisterForm: FC = () => {
    const onFinish = (values: FormValues): void => {
        console.log('Success:', values);

        if (values.password === values.passwordConfirm) {
            registerSuccess()
        } else {
            validationError()
        }


    };

    const [api, contextHolder] = notification.useNotification();

    const validationError = (): void => {
        api.error({
            message: 'Validation error',
            description: 'Check data and try again.',
            duration: 1.5
        });
    };

    const registerSuccess = (): void => {
        api.success({
            message: 'Success',
            duration: 1.5
        });
    };

    return (
        <ScreenWithCenterBlock image={BACKGROUND_IMAGE}>
            {contextHolder}
            <RoundedBlock>
                <Form
                    name='basic'
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={validationError}
                    autoComplete='off'
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                >
                    <Form.Item
                        label='Username'
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input username!'
                            },
                            {
                                min: 4,
                                message: 'Username is too short'
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            },
                            {
                                type: "email",
                                message: "Please enter a valid email"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            },
                            {
                                min: 8,
                                message: 'Password is too short'
                            }
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        label='Confirm'
                        name='passwordConfirm'
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!'
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("Two passwords doesn't match.");
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            style={{
                                background: COLORS.MAIN,
                                width: '300px'
                            }}
                            size='large'
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </RoundedBlock>
        </ScreenWithCenterBlock>
    )
}
export default RegisterForm