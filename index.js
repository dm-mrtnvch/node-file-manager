import readline from 'readline'

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const getUsername = () => {
  const usernameArg = process.argv.find(arg => arg.startsWith('--username'))
  const usernameValue = usernameArg.split('=')[1]
  return usernameValue || 'John Doe'
}

console.log(`Welcome to the File Manager, ${getUsername()}`)
