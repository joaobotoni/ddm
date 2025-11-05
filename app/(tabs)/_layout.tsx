import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="App"
                options={{title: 'Login'}}
            />
        </Tabs>
    );
}