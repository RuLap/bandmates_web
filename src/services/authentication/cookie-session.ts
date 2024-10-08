import { cookies } from "next/headers";
import { sealData, unsealData } from 'iron-session';
import { User } from "next-auth";


const sessionPassword = process.env.SESSION_PASSWORD as string;
if(!sessionPassword) throw new Error("SESSION_PASSWORD is not set");

export async function getSession() : Promise<User | null> {
    const encryptedSession = cookies().get('auth_session')?.value;
    const session = encryptedSession
        ? await unsealData(encryptedSession, {
            password: sessionPassword,
        }) as string
        : null;

    return session ? JSON.parse(session) as User : null;
}

export async function setSession(user: User) : Promise<void> {
    const encryptedSession = await sealData(JSON.stringify(user), {
        password: sessionPassword,
    });

    cookies().set('auth_session', encryptedSession, {
        sameSite: 'strict',
        httpOnly: true,
        //secure: true
    });
}