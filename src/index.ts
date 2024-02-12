// index.ts
import { createDbConnection, closeDbConnection } from './db';
import { fetchUserFromGithub, getUserLanguages} from './github';
import { fetchUserData, parseUserData } from './utils';


async function main() {
  const [,, command, ...args] = process.argv;

  try {
    switch (command) {
      case 'fetch':
        if (args.length !== 1) {
          console.error('Usage: node index.js fetch <github_username>');
          break;
        }
        await fetchUser(args[0]);
        break;
      case 'list':
        console.error('Database functionality is disabled. Cannot list users.');
        break;
      case 'listByLocation':
        console.error('Database functionality is disabled. Cannot list users by location.');
        break;
      default:
        console.error('Invalid command. Available commands: fetch');
    }
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}
function fetchUser(arg0: string) {
  throw new Error('Function not implemented.');
}

