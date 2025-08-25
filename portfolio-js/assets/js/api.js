
async function fetchProfileData() {
    //sobe o projeto, vai data e clica em raw e daí copia o link e cola aqui
    const url = '';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}