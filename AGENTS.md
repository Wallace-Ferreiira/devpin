# Project conventions
- Keep the WhatsApp destination and validated message builders in one shared browser-safe module so every contact action uses the same number.
- Contact form data goes directly to WhatsApp after schema validation; do not persist it or add server handling without a new request.
- Keep demonstration and service data in shared modules so ordering and package rules can be tested independently of presentation.