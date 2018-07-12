Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      get 'signup', to: "users#create"
      get 'login', to: "sessions#create"
    end
  end

end
