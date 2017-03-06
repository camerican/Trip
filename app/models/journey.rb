class Journey < ApplicationRecord
	has_many :users, :through => :user_journey
end
