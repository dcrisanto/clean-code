class UserAuth {
  constructor(user) {
    this.user = user
  }
  verifiCredentials() {
    return false
  }
}

class UserSettings extends UserAuth{
  constructor(user, settings) {
    super(user);
    this.settings = settings
  }

  changeSettings(settings) {
    this.verifiCredentials() ? console.log('Puede modificar su configuración')  
                           : console.log('Sin acceso');
  }
}

const newAccess = new UserSettings('dcrisanto', 'dark mode');
newAccess.changeSettings();


