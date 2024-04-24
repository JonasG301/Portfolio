function openContactForm() {
    var formUrl = "mailto:ihre-email@example.com" +
                  "?subject=Kontaktanfrage" +
                  "&body=Hallo,%0A%0A";
    window.open(formUrl, "_blank");
}