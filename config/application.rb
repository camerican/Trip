require_relative 'boot'

require 'rails/all'



# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Trip
  class Application < Rails::Application
  	# set :nav_buttons, {title: "Travel Tips", route: '/'},  {title: "Make A Journey", route: '/Journeys/new'}, {title: "Login", route: '/users/sign_in'}, {title: "logout", route: '/logout'}, {title: "Register", route: '/users/sign_up'}  
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
