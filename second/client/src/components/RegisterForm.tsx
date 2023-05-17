import {FC} from 'react';
import {Button, Form, Input, notification} from 'antd';
import {BACKGROUND_IMAGE} from '../constants/images';
import COLORS from '../constants/colors';
import {RoundedBlock, ScreenWithCenterBlock} from "../ui/shared";
import {FormValues} from "../types/form";
import request from "../utils/request";
import {ADD_USER, POST} from "../constants/request";
import {ResponseType} from "../types/request"

const RegisterForm: FC = () => {
    const onFinish = async (values: FormValues): Promise<void> => {
        if (values.password === values.password2) {
            const response: ResponseType = await request(POST, ADD_USER, {
                name: values.name,
                email: values.email,
                password: values.password
            })

            if (response.isError) {
                validationError(response.errorMessage);
            } else {
                registerSuccess();
            }

        } else {
            validationError('Passwords should be same!');
        }
    };

    const [api, contextHolder] = notification.useNotification();

    const validationError = (error: string): void => {
        api.error({
            message: 'Validation error',
            description: error,
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
                    onFinishFailed={() => validationError('Check data!')}
                    autoComplete='off'
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                >
                    <Form.Item
                        label='Username'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: 'Please input name!'
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
                                min: 4,
                                message: 'Password is too short'
                            }
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        label='Confirm'
                        name='password2'
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!'
                            },
                            ({getFieldValue}: any) => ({
                                validator(_: string, value: string) {
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