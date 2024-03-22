//
//  UsersViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 26.02.2024.
//

import UIKit

final class UsersViewController: UIViewController {
    
    private let usersTableView = UITableView()
    
    private var addUserButton = UIBarButtonItem()
    private var signOutButton = UIBarButtonItem()
    private var clients: [Client] = []

    override func viewDidLoad() {
        super.viewDidLoad()

        setupView()
        addSubview()
        setupLayout()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        clients = StorageManager.shared.fetchClients()
        usersTableView.reloadData()
    }
    
    @objc
    private func addUserButtonPressend() {
        let addUserVC = UINavigationController(rootViewController: AddUserViewController())
        addUserVC.modalPresentationStyle = .fullScreen
        present(addUserVC, animated: true)
    }
    
    @objc
    private func signOutButtonPressend() {
        dismiss(animated: true)
    }
}

//MARK: Setting view
private extension UsersViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Клиенты"
        navigationController?.navigationBar.prefersLargeTitles = true
        
        usersTableView.delegate = self
        usersTableView.dataSource = self
        usersTableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
        
        addUserButton = UIBarButtonItem(title: "Добавить пользователя", style: .plain, target: self, action: #selector(addUserButtonPressend))
        navigationItem.rightBarButtonItem = addUserButton
        
        signOutButton = UIBarButtonItem(title: "Выйти", style: .plain, target: self, action: #selector(signOutButtonPressend))
        navigationItem.leftBarButtonItem = signOutButton
    }
}

//MARK: Setting
private extension UsersViewController {
    func addSubview() {
        [
            usersTableView
        ].forEach {
            view.addSubview($0)
        }
    }
}

//MARK: Layout
private extension UsersViewController {
    func setupLayout() {
        [
            usersTableView
        ].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }
        
        NSLayoutConstraint.activate([
            usersTableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            usersTableView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 0),
            usersTableView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            usersTableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

//MARK: Table View DataSource
extension UsersViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        clients.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = clients[indexPath.row].fullName
        
        return cell
    }
}

//MARK: Table View Delegate
extension UsersViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let clientVC = ClientProfileViewController()
        clientVC.configure(client: clients[indexPath.row])
        let navigationClientVC = UINavigationController(rootViewController: clientVC)
        navigationClientVC.modalPresentationStyle = .fullScreen
        
        present(navigationClientVC, animated: true)
        usersTableView.deselectRow(at: indexPath, animated: true)
    }
}

