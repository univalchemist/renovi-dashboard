module.exports = {
    // beforeCreate(event) {
    //   console.log(event.params);
    //   // let's do a 20% discount everytime
    // //   event.params.data.price = event.params.data.price * 0.8;
    // },

    async beforeUpdate(event) {
        const {full_name, status, email } = event.params.data;

        console.log(full_name, status, email);

        if (status === 'approved') {
          await strapi.plugins['email'].services.email.send({
            to: email,
            subject: 'Renovi Application Approved',
            html: `Hi ${full_name} <br/><br/>Your application has been approved<br/><br/>Best,<br/>Renovi Team`,
          });
        } else if (status === 'declined') {
          await strapi.plugins['email'].services.email.send({
            to: email,
            subject: 'Renovi Application Declined',
            html: `Hi ${full_name} <br/><br/>Your application has been declined<br/><br/>Best,<br/>Renovi Team`,
          });
        }
      },

  };
