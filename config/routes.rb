Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :houses, only: [:index, :show, :create]
  end

  root "static_pages#root"
end
