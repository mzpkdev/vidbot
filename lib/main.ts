export async function main(...varargs: string[]): Promise<number> {
    void varargs
    return 0
}


main(...process.argv.slice(2))
    .then(code => console.log(code))
    .catch(error => console.log(error))