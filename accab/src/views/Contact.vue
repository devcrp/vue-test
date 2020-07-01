<template>
  <div class="contact">
    <div class="background">
      <div class="background-image"></div>
    </div>

    <b-container>
      <div class="contact-container p-3">
        <h1 class="text-center highlight">Contacta con nosotros</h1>
        <div class="form py-4">
          <b-form>
            <b-form-group label="Nombre" label-for="input-name">
              <b-form-input
                id="input-name"
                v-model="name"
                type="text"
                required
                placeholder="Escribe aquí tu nombre"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Correo electrónico"
              label-for="input-email"
              description="Nunca compartiremos tu correo electrónico con nadie"
            >
              <b-form-input
                id="input-email"
                v-model="email"
                type="email"
                required
                placeholder="Escribe aquí tu email"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Mensaje" label-for="input-email">
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Escibe aquí lo que quieras decirnos"
                rows="6"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>

            <b-form-group>
              <b-form-checkbox
                id="checkbox-accept"
                v-model="accepted"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >Acepto recibir información y noticias de las actividades que organiza la fundación ACCAB</b-form-checkbox>
            </b-form-group>

            <b-form-group>
              <b-form-checkbox
                id="checkbox-accept"
                v-model="accepted"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                He leído y acepto la política de privacidad de la fundación ACCAB
                <span
                  class="highlight"
                >*</span>
              </b-form-checkbox>
            </b-form-group>

            <b-btn variant="primary" type="submit">Enviar</b-btn>
          </b-form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      name: "",
      text: "",
      accepted: false
    };
  }
};
</script>

<style>
body {
  background-color: #f3f3f3;
}
</style>

<style scoped>
.contact-container {
  margin-top: 20vh;
  background-color: white;
}
.background {
  z-index: -1;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  border-bottom-right-radius: 50%;
}
.background-image {
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("~@/assets/contact.jpg");
}
</style>