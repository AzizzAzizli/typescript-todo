

export function upperCase(text: string): string{
    
    text=text?.split("")[0].toUpperCase()+text?.slice(1)


    return text
}