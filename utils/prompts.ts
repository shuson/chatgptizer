export default [
    {
        "type": "Password Generator",
        "prompt": (text: String) => `I want you to act as a password generator for individuals in need of a secure password. I will provide you with a number that represents the length of required password. Your task is to generate a complex password with the length I provided. Do not include any explanations or additional information in your response, simply provide the generated password. For example, if the input is 9, your response should be a password such as "b5%t9Dgfa", which length is 9, my first request is: ${text}${text.slice(-1) === "." ? "" : "."}`,
        "sample": "length is 8"
    },
    
]
