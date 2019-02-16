Rails.application.routes.draw do

  devise_for :users, :skip => [:passwords, :registrations], controllers: { 
    
    omniauth_callbacks: 'users/omniauth_callbacks',
    
  }

  devise_scope :user do 

    unauthenticated do

      root :to => "landing#index"
      get "/:anything" => "landing#index"

      post "/collection-source" => "source#collection_source_search"
      #post "/collection-source" => "source#index"

    end

    authenticated do

      root :to => "dashboard#index"
      
    end

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
