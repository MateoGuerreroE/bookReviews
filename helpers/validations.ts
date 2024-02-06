export function validateErrors(user: Partial<User>):Partial<User> {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    let errorName, errorLastname, errorEmail, errorPhoto;
    if (!emailRegex.test(user.email as string)) errorEmail = "* Email inválido"
    else errorEmail = ""
    if ((user.firstName as string).length < 2) errorName = "* Introduce un nombre válido"
    else errorName = ""
    if ((user.lastName as string).length < 2) errorLastname = "* Introduce un apellido válido"
    else errorLastname = ""
    if (!urlRegex.test(user.photo as string) && user.photo !== undefined) errorPhoto = "* La URL de la imágen es inválida"
    else errorPhoto = ""
    return {
        firstName: errorName,
        lastName: errorLastname,
        email: errorEmail,
        photo: errorPhoto
    }
}