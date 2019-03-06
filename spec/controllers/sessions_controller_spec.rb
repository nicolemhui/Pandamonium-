require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  let!(:user) { User.create!({username: "spicegirl", email: "spice@girl.com", password: "password"}) }

  describe "POST #create" do 
    context 'with correct credentials' do 
      it 'logs the user in' do 
        post :create, params: { user: { email: "spice@girl.com", password: "password"} }
        user = User.find_by_email("spice@girl.com")

        expect(session[:session_token]).to eq(user.session_token)
      end 
      
      it 'renders the users show page on success' do 
        post :create, params: { user: { email: "spice@girl.com", password: "password"} }
        expect(response).to render_template('api/users/show')
      end 
    end 

    #double check render_json
    context 'with invalid credentials' do 
      it 'returns to sign-in with non-existent user' do 
        post :create, params: { user: { email: "spi@girl.com", password: "password"} }
        expect(response).to render_json("Invalid email/password")
      end 

      it 'returns to sign-in with incorrect password' do 
        post :create, params: { user: { email: "spice@girl.com", password: "123"} }
        expect(response).to render_json("Invalid email/password")
      end 
    end 
  end 
end 