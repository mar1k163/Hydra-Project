//
//  Client.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 22.03.2024.
//

import Foundation

struct Client: Codable {
    let id: String
    let name: String
    let surname: String
    let patronymic: String
    let phoneNumber: Int
    let email: String
    let address: String
    
    var fullName: String {
        "\(surname) \(name) \(patronymic)"
    }
    
    init(name: String, surname: String, patronymic: String, phoneNumber: Int, email: String, address: String) {
        self.id = UUID().uuidString
        self.name = name
        self.surname = surname
        self.patronymic = patronymic
        self.phoneNumber = phoneNumber
        self.email = email
        self.address = address
    }
}
