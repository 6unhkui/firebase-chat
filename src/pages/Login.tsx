import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import firebase from "firebase/app";
import { authService } from "utils/fbase";
import { Button } from "@chakra-ui/button";
import Wrapper from "components/Wrapper";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "components/InputField";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
});

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        authService.signInWithPopup(provider);
    };

    return (
        <Box bgColor="blue.900" position="absolute" height="100vh" width="100vw">
            <Wrapper variant="small">
                <Heading color="white" pt="10" textAlign="center" size="2xl">
                    Login
                </Heading>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={async (values, { setErrors }) => {
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField name="email" label="이메일" placeholder="이메일을 입력하세요." />
                            <Box mt={4}>
                                <InputField
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                />
                            </Box>

                            <Button mt={4} type="submit" isLoading={isSubmitting} width={"full"}>
                                로그인
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Box mt={10}>
                    <Button onClick={signInWithGoogle} variant="outline" colorScheme="red">
                        Sign in with Google
                    </Button>
                </Box>
            </Wrapper>
        </Box>
    );
};

export default Login;
