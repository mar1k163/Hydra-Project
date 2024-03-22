//
//  StorageManager.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 11.03.2024.
//

import Foundation

final class StorageManager {
    static let shared = StorageManager()
    
    private let userDefaults = UserDefaults.standard
    private let clientsKey = "clients"
    
    func saveClient(client: Client) {
        var clients = fetchClients()
        clients.append(client)
        
        guard let data = try? JSONEncoder().encode(clients) else { return }
        
        userDefaults.setValue(data, forKey: clientsKey)
    }
    
    func deleteClient(id: String) {
        var clients = fetchClients()
        
        for index in 0..<clients.count {
            if clients[index].id == id {
                clients.remove(at: index)
            }
        }
        
        guard let data = try? JSONEncoder().encode(clients) else { return }
        
        userDefaults.setValue(data, forKey: clientsKey)
    }
    
    func fetchClients() -> [Client] {
        guard let data = userDefaults.data(forKey: clientsKey) else { return [] }
        guard let clients = try? JSONDecoder().decode([Client].self, from: data) else { return [] }
        
        return clients
    }
    
    private init() { }
}
