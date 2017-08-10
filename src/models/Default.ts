export abstract class Default {
    public id: number;

    cosntructor(data?: any) {
        try {
            this.id = data._id;
        }catch(e) {
            console.error(e);
        }
    }
}