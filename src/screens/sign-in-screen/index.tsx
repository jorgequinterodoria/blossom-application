import { Button } from 'react-native'
import React from 'react'
import { Box, Text } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper'

const SignInScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<'SignIn'>>()

    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Sign In Screen</Text>
                <Button title='Navigate to sign up' onPress={navigateToSignUpScreen} />
            </Box>
        </SafeAreaWrapper>
    )
}

export default SignInScreen
