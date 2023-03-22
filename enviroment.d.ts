declare namespace NodeJS {
  export interface ProcessEnv {
    MYSQL_USER: string;
    MYSQL_PORT: number;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE: string;
    MYSQL_HOST: string;
  }
}
