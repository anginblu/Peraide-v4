Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namestace :v1 do
      get 'signup', to: "users#new"
      get 'login', to: "sessions#new"
    end
  end

end
