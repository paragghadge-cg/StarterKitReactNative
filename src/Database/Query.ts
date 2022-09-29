export const Query = {
    DashBoard: {
        getData: (name: string, location: string) => {
            return `First_Name = "${name}" && Location [c] "${location}" `;
        }
    }
};
