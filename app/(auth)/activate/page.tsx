import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';
import ActivateForm from '@/components/activate/activate-form';


export default function Page() {
   
    return (
        <Card className="w-full shadow-xl border-0">
            <CardHeader className="space-y-2 text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <UserCheck color='white' />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Activate account to Next-talk</CardTitle>
                <CardDescription className="text-gray-600">
                    Activate your account to log in.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Form */}
                <ActivateForm/>
            </CardContent>
        </Card>

    );
}
