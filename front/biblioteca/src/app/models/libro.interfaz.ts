


export interface Libro {
    ok: boolean;
    libros: {

        title: string;
        year: string;
        gender: string;
        pages: number;
        editorial: {
            name: string;
            adress: string;
            phone_number: number;
            email: string;
            max_limit: number;
            libros: number;
        };

        autor: {
            name: string;
            year: string;
            city: string;
            email: string;
        };
    }
}
