require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PeraideV4
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        #can limit localhost address e.g., origins 'localhost:3001'
        origins '*'
        resource '*',
          headers: :any,
          methods: [:get, :post, :delete, :options]
      end
    end

    config.middleware.use ActionDispatch::Flash

    config.action_controller.allow_forgery_protection = false

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
