export class User {
  public token: string;
  public carrera: 'ICC' | 'LCC' | 'ITI';
  public matricula: string;
  public last_updated: Date;
  public name: string;
  public ultima_actualizacion: Date;
  constructor() {
    this.token = '';
    this.carrera = 'ICC';
    this.matricula = '';
    this.last_updated = new Date();
    this.name = '';
    this.ultima_actualizacion = new Date();
  }
}
