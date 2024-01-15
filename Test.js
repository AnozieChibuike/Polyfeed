import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import Button from "./src/components/Button"

export default Test =()=> {
    return <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{paddingBottom: 20}} >
            <Input placeholder='Organization name' info={true} />
            <Input placeholder='Email address' />
            <Input placeholder='Password' password={true}/>
            <Input placeholder='Password' password={true} />
            <Input placeholder='Password' password={true} />
            <Input placeholder='Password' password={true} />
            <Input placeholder='Password' password={true} />
            <Input placeholder='Retype password' password={true} />
            <Input placeholder='Retype password' password={true} />
            {/* <Button text='HI' /> */}
        </ScrollView>
    </KeyboardAvoidingView>
}