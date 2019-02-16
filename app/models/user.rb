class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: %i[google_oauth2]

  def self.from_omniauth(auth, signed_in_resource = nil)

    # Try to find user by uid (special id given to user by auth provider).
    user_by_uid = User.where(provider: auth.provider, uid: auth.uid).first

    # If cannot find user by uid, search for user by the email given by the auth provider.
    user = user_by_uid.present? ? user_by_uid : User.find_by_email(auth.info.email)

    # If the search for user by the email given by the auth provider does not yield anything then create the account using info derived from each provider.
    if !user.present?
    
      user = User.new # Create new class instance.
    
      #if auth.provider == "google_oauth2"

      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
      user.email = auth.info.email
    
      #end

      user.skip_confirmation! # Don't require email confirmation for this new user.

      user.password = Devise.friendly_token[0,20] # Generate password for new user.

      user.save # Save this new user to the database.
    
    end

    # Update column with auth provider, profile picture, and auth id.
    user.update_columns(provider: auth.provider, uid: auth.uid, img: auth.info.image) 
  
    user

  end

end
