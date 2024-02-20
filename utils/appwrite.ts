import { APP_WRITE_ID, ENDPOINT } from '@/app.constants'
import { Account, Client, Databases, Storage } from 'appwrite'

export const client = new Client()

client.setEndpoint(ENDPOINT).setProject(APP_WRITE_ID)

export const account = new Account(client)
export { ID } from 'appwrite'
export const DB = new Databases(client)
export const storage = new Storage(client)
