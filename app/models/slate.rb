class Slate < ApplicationRecord
  belongs_to :user
  has_many :issues, dependent: :destroy

  accepts_nested_attributes_for :issues, allow_destroy: true
end
