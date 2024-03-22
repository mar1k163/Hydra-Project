//
//  AddUserViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 26.02.2024.
//

import UIKit

final class AddUserViewController: UIViewController {
    
    private let surnameLabel = UILabel(text: "Фамилия:")
    private let nameLabel = UILabel(text: "Имя:")
    private let patronymicLabel = UILabel(text: "Отчество:")
    private let phoneLabel = UILabel(text: "Телефон:")
    private let emailLabel = UILabel(text: "E-mail:")
    private let addressLabel = UILabel(text: "Адрес:")
    
    private let surnameTF = AuthTextFieldForm(isActive: true)
    private let nameTF = AuthTextFieldForm(isActive: true)
    private let patronymicTF = AuthTextFieldForm(isActive: true)
    private let phoneTF = AuthTextFieldForm(isActive: true)
    private let emailTF = AuthTextFieldForm(isActive: true)
    private let addressTF = AuthTextFieldForm(isActive: true)
    
    private let surnameStackView = UIStackView()
    private let nameStackView = UIStackView()
    private let patronymicStackView = UIStackView()
    private let phoneStackView = UIStackView()
    private let emailStackView = UIStackView()
    private let addressStackView = UIStackView()
    private let stackView = UIStackView()
    
    private let createButton = UIButton(title: "Создать", titleColor: .white, backgroundColor: .darkGray)
    private var denyButton = UIBarButtonItem()

    override func viewDidLoad() {
        super.viewDidLoad()

        setupView()
        addSubview()
        setupLayout()
        
        phoneTF.keyboardType = .phonePad
    }
    
    private func showAlert(title: String, message: String, closeView: Bool) {
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        
        let okAction = UIAlertAction(title: "OK", style: .default) { [unowned self] _ in 
            if closeView {
                dismiss(animated: true)
            }
        }
        alert.addAction(okAction)
        
        present(alert, animated: true)
    }
    
    @objc
    private func denyButtonPressed() {
        dismiss(animated: true)
    }
    
    @objc
    private func createButtonPressed() {
        if let name = nameTF.text, !name.isEmpty,
           let surname = surnameTF.text, !surname.isEmpty,
           let patronymic = patronymicTF.text, !patronymic.isEmpty,
           let phone = Int(phoneTF.text ?? ""),
           let email = emailTF.text, !email.isEmpty,
           let address = addressTF.text, !address.isEmpty {
            StorageManager.shared.saveClient(client: Client(
                name: name,
                surname: surname,
                patronymic: patronymic,
                phoneNumber: phone,
                email: email,
                address: address
            ))
            showAlert(title: "Клиент добавлен", message: "Вы успешно добавили нового клиента.", closeView: true)
        } else {
            showAlert(title: "Клиент не добавлен", message: "Все поля должны быть заполнены.", closeView: false)
        }
    }
}

//MARK: Setting View
private extension AddUserViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Добавить клиента"
        
        denyButton = UIBarButtonItem(title: "Отменить", style: .plain, target: self, action: #selector(denyButtonPressed))
        denyButton.tintColor = .mainRed()
        navigationItem.leftBarButtonItem = denyButton
        
        createButton.addTarget(self, action: #selector(createButtonPressed), for: .touchUpInside)
    }
}

//MARK: Setting
private extension AddUserViewController {
    func addSubview() {
        [
            stackView
        ].forEach {
            view.addSubview($0)
        }
        
        surnameStackView.addArrangedSubview(surnameLabel)
        surnameStackView.addArrangedSubview(surnameTF)
        surnameStackView.axis = .vertical
        surnameStackView.spacing = 0
        surnameStackView.distribution = .fill
        
        nameStackView.addArrangedSubview(nameLabel)
        nameStackView.addArrangedSubview(nameTF)
        nameStackView.axis = .vertical
        nameStackView.spacing = 0
        nameStackView.distribution = .fill
        
        patronymicStackView.addArrangedSubview(patronymicLabel)
        patronymicStackView.addArrangedSubview(patronymicTF)
        patronymicStackView.axis = .vertical
        patronymicStackView.spacing = 0
        patronymicStackView.distribution = .fill
        
        phoneStackView.addArrangedSubview(phoneLabel)
        phoneStackView.addArrangedSubview(phoneTF)
        phoneStackView.axis = .vertical
        phoneStackView.spacing = 0
        phoneStackView.distribution = .fill
        
        emailStackView.addArrangedSubview(emailLabel)
        emailStackView.addArrangedSubview(emailTF)
        emailStackView.axis = .vertical
        emailStackView.spacing = 0
        emailStackView.distribution = .fill
        
        addressStackView.addArrangedSubview(addressLabel)
        addressStackView.addArrangedSubview(addressTF)
        addressStackView.axis = .vertical
        addressStackView.spacing = 0
        addressStackView.distribution = .fill
        
        stackView.addArrangedSubview(surnameStackView)
        stackView.addArrangedSubview(nameStackView)
        stackView.addArrangedSubview(patronymicStackView)
        stackView.addArrangedSubview(phoneStackView)
        stackView.addArrangedSubview(emailStackView)
        stackView.addArrangedSubview(addressStackView)
        stackView.addArrangedSubview(createButton)
        stackView.axis = .vertical
        stackView.spacing = 15
        stackView.distribution = .fill
    }
}

//MARK: Setting View
private extension AddUserViewController {
    func setupLayout() {
        [
            stackView
        ].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16)
        ])
    }
}
