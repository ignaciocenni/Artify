export default async function useFetch( url ) {

    const response = await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Vaya algo salio mal", {
                    cause: response.status,
                });
            }
            return response.json();
        })
        .then((data) => data)
        .catch((errorInformation) => {
            console.log("Codigo de error;", errorInformation.cause);
            console.log("Mensaje al usuario:", errorInformation);

        });

    return response

}