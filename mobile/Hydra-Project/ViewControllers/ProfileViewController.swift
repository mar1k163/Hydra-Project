//
//  ProfileViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 26.02.2024.
//

import UIKit

final class ProfileViewController: UIViewController {
    
    private let userNameLabel = UILabel(text: "Иванов Иван Иванович")
    private let addressLabel = UILabel(text: "г.Ульяновск, ул.Тестовая, д. 35-45")
    private let phoneLabel = UILabel(text: "тел. 8-900-000-00-00")
    
    private let userInfoStackView = UIStackView()
    
    private let usersTableView = UITableView()
    
    private var addCalculationButton = UIBarButtonItem()
    private var signOutButton = UIBarButtonItem()

    override func viewDidLoad() {
        super.viewDidLoad()

        setupView()
        addSubview()
        setupLayout()
    }
    
    func configure() {
        
    }
    
    @objc
    private func addCalculationButtonPressend() {
        let addCalculatioVC = UINavigationController(rootViewController: AddCalculationViewController())
        addCalculatioVC.modalPresentationStyle = .fullScreen
        present(addCalculatioVC, animated: true)
    }
    
    @objc
    private func signOutButtonPressend() {
        dismiss(animated: true)
    }
}

//MARK: Setting view
private extension ProfileViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Клиент:"
        navigationController?.navigationBar.prefersLargeTitles = true
        
        usersTableView.delegate = self
        usersTableView.dataSource = self
        usersTableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
        
        addCalculationButton = UIBarButtonItem(title: "Добавить расчет", style: .plain, target: self, action: #selector(addCalculationButtonPressend))
        navigationItem.rightBarButtonItem = addCalculationButton
        
        signOutButton = UIBarButtonItem(title: "Выйти", style: .plain, target: self, action: #selector(signOutButtonPressend))
        navigationItem.leftBarButtonItem = signOutButton
    }
}

//MARK: Setting
private extension ProfileViewController {
    func addSubview() {
        [
            userInfoStackView,
            usersTableView
        ].forEach {
            view.addSubview($0)
        }
        
        userInfoStackView.addArrangedSubview(userNameLabel)
        userInfoStackView.addArrangedSubview(addressLabel)
        userInfoStackView.addArrangedSubview(phoneLabel)
        userInfoStackView.axis = .vertical
        userInfoStackView.spacing = 5
        userInfoStackView.distribution = .fill
    }
}

//MARK: Layout
private extension ProfileViewController {
    func setupLayout() {
        [
            userInfoStackView,
            usersTableView
        ].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }
        
        NSLayoutConstraint.activate([
            userInfoStackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            userInfoStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            userInfoStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            
            usersTableView.topAnchor.constraint(equalTo: userInfoStackView.bottomAnchor, constant: 16),
            usersTableView.leadingAnchor.constraint(equalTo: userInfoStackView.leadingAnchor, constant: -16),
            usersTableView.trailingAnchor.constraint(equalTo: userInfoStackView.trailingAnchor),
            usersTableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

//MARK: Table View DataSource
extension ProfileViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        5
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = "Расчет №\(indexPath.row + 1)"
        
        return cell
    }
}

//MARK: Table View Delegate
extension ProfileViewController: UITableViewDelegate {
    
}
